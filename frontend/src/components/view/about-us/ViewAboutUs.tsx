import { Container, Grid, List, ListItem, Typography, Box } from '@mui/material';
import { LinkText } from '@/components/atom/link';

import { teamData } from './team-data';
import { CardMember } from './CardMemeber';

export const ViewAboutUs = () => (
  <Container>
    <Box pt={'52px'} pb={'104px'}>
      <Typography variant={'h1'} component={'h1'} mb={4} textAlign={'center'}>
        Про нас
      </Typography>

      <Box mb={10}>
        <Grid container spacing={6}>
          {teamData.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardMember {...member}/>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography
        mb={4}
        variant={'h2'}
        component={'h2'}
        textAlign={'center'}
      >
        З чого починався проєкт «City Dream»?
      </Typography>

      <List sx={{
        listStyleType: 'disc',
        mb: 3,
        pl: 2,
        '& .MuiListItem-root': {
          display: 'list-item',
        },
      }}>
        <ListItem>
          <Typography>
            Перша ідея проєкту виникла у 2013 році і називалася «Черкаська
            мрія». На той час мер Черкас Сергій Одарич звернувся з ідеєю до
            освітньої ІТ-спільноти&nbsp;
            <LinkText href={'https://geekhub.ck.ua'} target={'_blank'}>
              GeekHub
            </LinkText>.
            Була створена спільна команда з
            представників Черкаської міської ради та спеціалістів ГікХаб. Це
            були перші спроби реалізувати проєкт.
          </Typography>
        </ListItem>

        <ListItem>
          <Typography>
            Через рік до цієї ідеї повернулися Сергій Поліщук та &nbsp;
            <LinkText target={'_blank'} href={'https://nachasi.com/crypto/2021/06/21/nik-kurat-coinbase/'}>
              Нік Курат
            </LinkText>.
            Вони успішно <LinkText target={'_blank'} href={'https://idream.pp.ua'}>
            запустили сайт</LinkText>,
            а також утілили в життя декілька «мрій». Хлопці розуміли
            важливість
            розвитку культури філантропії в Черкасах. А ще «Черкаська мрія»
            стала першим соціальним проєктом для практики ІТ студентів
            GeekHub.
            Та без постійної управлінської команди платформа не стала
            життєздатною.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Нову хвилю втілення проєкту ви спостерігаєте зараз. Її ініціював
            минулий менеджер GeekHub Денис Андрущенко. Він давно знав про
            «Черкаську мрію» як потенційний користувач платформи і втілювач
            проєктів у Черкасах. Коли Денис почув про конкурс від &nbsp;
            <LinkText target={'_blank'} href={'https://www.facebook.com/EaPCivilSociety?__cft__[0]=AZWGkLGG2yKhHDBqGGSgRMpeq4LvWpNlCOjApkpssZnx0nfvcgusNfngZYLr7pYwOdMQG5sOU4s43qcxtCEpFwjT6rm2W4C1m1Q_Z43-EuIYOeByrq_iwlT1sIkpLLzNjtPZ5WPsoQ-nj03kaS75RW1CC7jg8DXYfBtRtht2TjbDLRTrYkdzS1z9ZNwTaloBZvA&__tn__=-]K-R'}>
              Eastern Partnership Civil Society Facility
            </LinkText>
            , зрозумів, що оновленій платформі — бути.
          </Typography>
        </ListItem>
      </List>

      <Typography mb={3}>
        У 2022 році Дениса офіційно вибрали як Civic Digital Fellow. Після
        початку повномасштабної війни та декількох місяців вагань «чи на
        часі», зібрав команду для оновлення й запуску цієї платформи. Щоб дати
        громаді інструмент для ефективної та прозорої співпраці.
      </Typography>

      <Typography mb={3}>
        Скільки б команд не працювало над реалізацією цієї ініціативи, мета
        одна — допомогти знайти ресурси та волонтерів для змін, на які є запит
        у громадах.
      </Typography>

      <Typography mb={3}>
        Доки наші захисники боронять Україну, ми в тилу маємо обовʼязок
        підвищити згуртованість своєї громади та взятися за ті проблеми міста,
        що вже давно назрівали. І без привʼязки до Черкас ;)
      </Typography>

      <Typography variant={'body1'} mb={3}>
        Ви з нами? Тоді заповнюйте&nbsp;
        <LinkText passHref target={'_blank'}
                  href={'https://forms.gle/GuNb91jeyCe6QECdA'}>
          анкету
        </LinkText>
        .
      </Typography>
    </Box>
  </Container>
);
