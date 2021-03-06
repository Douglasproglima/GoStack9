import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import User from '../models/User';
import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    const isUserProvider = await User.findOne({
      where: { provider: true, id: req.userId },
    });

    if (!isUserProvider) {
      return res
        .status(401)
        .json({ message: 'Você não tem permissão de ver os agendamentos.' });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [endOfDay(parsedDate), startOfDay(parsedDate)],
        },
        include: [
          {
            model: User,
            as: 'user',
            attribute: ['name'],
          },
        ],
        order: ['date'],
      },
    });

    return res.json(appointments);
  }
}

export default new ScheduleController();
