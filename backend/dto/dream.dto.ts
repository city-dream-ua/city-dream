export class DreamDto {
  _id;
  title;
  alt;
  src;
  authorAvatar;
  authorFirstName;
  authorLastName;
  description;
  slug;
  steps;

  constructor(data: any) {
    this._id = data.id;
    this.title = data.title;
    this.alt = data.title;
    this.src = data.coverImage;
    this.authorAvatar = data.managerId.avatar;
    this.authorFirstName = data.managerId.firstName;
    this.authorLastName = data.managerId.lastName;
    this.description = data.description;
    this.slug = data.shortLink;
    this.steps = data.steps;
  }
}
