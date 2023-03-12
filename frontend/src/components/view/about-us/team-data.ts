import { TeamMember } from './interface';

import managerImg from '@/assets/images/team-denys-andrushchenko.jpg';
import frontDevImg from '@/assets/images/team-mykhailo-andrushchenko.jpg';
import communicationManger from '@/assets/images/team-liza-bukhanets.jpg'
import designerImg from '@/assets/images/team-sykora-julia.png'
import mentorImg from '@/assets/images/team-serhii-polishchuk.jpg'

export const teamData: TeamMember[] = [
  {
    name: 'Денис Андрущенко',
    position: 'Менеджер проєкту',
    img: managerImg,
    fbLink: 'https://www.facebook.com/da.orient',
  },
  {
    name: 'Сергій Поліщук',
    position: 'Ментор проєкту',
    img: mentorImg,
    fbLink: 'https://www.facebook.com/sergey.polischook.3'
  },
  {
    name: 'Єлизавета Буханець',
    position: 'Комунікаційна менеджерка',
    img: communicationManger,
    fbLink: 'https://www.facebook.com/Elizaveta.Bukhanets',
  },
  {
    name: 'Михайло Андрущенко',
    position: 'Фронт-енд розробник',
    img: frontDevImg,
    fbLink: 'https://www.facebook.com/mykhailo.andrushchenko',
  },
  {
    name: 'Юлія Сікора',
    position: 'Дизайнерка',
    img: designerImg,
    fbLink: 'https://www.facebook.com/julia.sikora.338',
  },
];
