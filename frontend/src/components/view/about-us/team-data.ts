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
    workPlace: 'співвласник копірайтинг агенції WTFBit',
    workLink: 'https://wtfbit.com',
    img: managerImg,
    fbLink: 'https://www.facebook.com/da.orient',
  },
  {
    name: 'Сергій Поліщук',
    position: 'Ментор проєкту',
    workPlace: 'Baja Bikes, Barcelona',
    workLink: 'https://www.bajabikes.eu/en/team/',
    img: mentorImg,
    fbLink: 'https://www.facebook.com/sergey.polischook.3'
  },
  {
    name: 'Єлизавета Буханець',
    position: 'Комунікаційна менеджерка',
    workPlace: 'ЧІМ / Черкаський інститут міста',
    workLink: 'https://www.cherkasyurban.institute/',
    img: communicationManger,
    fbLink: 'https://www.facebook.com/Elizaveta.Bukhanets',
  },
  {
    name: 'Михайло Андрущенко',
    position: 'Фронт-енд розробник',
    workPlace: 'Everlabs',
    workLink: 'https://everlabs.com',
    img: frontDevImg,
    fbLink: 'https://www.facebook.com/mykhailo.andrushchenko',
  },
  {
    name: 'Юлія Сікора',
    position: 'Дизайнерка',
    workPlace: 'TRIARE',
    workLink: 'https://triare.net/',
    img: designerImg,
    fbLink: 'https://www.facebook.com/julia.sikora.338',
  },
];
