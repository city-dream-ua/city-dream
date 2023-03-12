import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { teamData } from './team-data';
import { CardMember } from './CardMemeber';
import Link from 'next/link';

export const ViewAboutUs = () => {

  return (
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
          З чого починалася «Черкаська мрія»?
        </Typography>

        <List sx = {{
          listStyleType: 'disc',
          mb: 3,
          pl: 2,
          '& .MuiListItem-root': {
            display: 'list-item',
          },
        }}>
          <ListItem>
            <Typography>
              Перша ідея проєкту виникла у 2013 році. Сергій Олегович Одарич
              звернувся з ідеєю до Geek Hub. Була створена адмін команда від
              Черкаської міської ради та команда проджектів і розробників
              платформи з боку GeekHub. Це були перші спроби і реалізувати проєкт
              повною мірою не вдалося.
            </Typography>
          </ListItem>

          <ListItem>
            <Typography>
              Через рік до цієї ідеї повернулися Serhii Polishchuk та Nick Kurat. Вони
              успішно здійснили декілька «мрій» без підтримки адмін команди. Хлопці
              розуміли важливість розвитку культури філантропії в громаді Черкас. І
              «Черкаська мрія» стала першим соціальним проєктом для практики ІТ
              студентів..
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Нову хвилю втілення проєкту ти спостерігаєш зараз. Її ініціював
              Past-менеджер GeekHub Denys Andrushchenko. Денис давно знав про
              «Черкаську мрію» як потенційний користувач платформи і втілювач проєктів
              у Черкасах. Коли він почув про конкурс від Eastern Partnership Civil
              Society Facility, зрозумів, що оновленій платформі — бути.
            </Typography>
          </ListItem>
        </List>

        <Typography mb={3}>
          Скільки б команд не працювало над реалізацією цієї ініціативи, мета одна
          — допомогти знайти ресурси та волонтерів для змін, на які є запит у
          черкащан.
        </Typography>

        <Typography mb={3}>
          Доки наші захисники боронять Україну, ми в тилу маємо обовʼязок
          підвищити згуртованість своєї громади та взятися за ті проблеми міста,
          що вже давно назрівали.
        </Typography>

        <Typography variant={'body1'} mb={3}>
          Ви з нами? Тоді заповнюйте&nbsp;
          <Link passHref target={'_blank'} href={'https://forms.gle/GuNb91jeyCe6QECdA'}>
            форму
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  );
};
