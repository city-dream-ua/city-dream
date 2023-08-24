export class StepsMapper {
  id: string;
  name: string;
  resources: object;

  constructor(checkList: any) {
    this.id = checkList.id;
    this.name = checkList.name;
    this.resources = getResources(checkList);
  }
}

const getResources = (checkList: any) => {
  if (!checkList.checkItems) {
    return [];
  }

  return checkList.checkItems.map((checkItem: any) => ({
    id: checkItem.id,
    title: checkItem.name,
    status: checkItem.state
  }))
}
