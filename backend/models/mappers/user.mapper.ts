type TrelloMember = {
  username: string;
  fullName: string;
  id: string;
  avatarHash: string;
};

export class UserMapper {
  fbId: string | null;
  trelloId: string | null;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  roles: string[];

  constructor(trelloMember: TrelloMember) {
    this.fbId = null;
    this.trelloId = trelloMember.username;
    this.firstName = getFirstName(trelloMember);
    this.lastName = getLastName(trelloMember);
    this.avatar = trelloAvatar(trelloMember);
    this.roles = ["admin"];
  }
}

const getFirstName = (member: TrelloMember): string | null => {
  const parts = member.fullName.split(" ");
  return parts[0] || null;
};

const getLastName = (member: TrelloMember): string | null => {
  const parts = member.fullName.split(" ", 2);
  return parts.length < 2 ? null : parts[1];
};

const avatarSize = 170;

const trelloAvatar = (member: TrelloMember): string | null => {
  if (!member) {
    throw new Error("to get member avatar you must provide a member");
  }

  return `https://trello-members.s3.amazonaws.com/${member.id}/${member.avatarHash}/${avatarSize}.png`;
};
