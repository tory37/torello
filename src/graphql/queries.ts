// tslint:disable
// this is an auto generated file. This will be overwritten

export const getBoard = `query GetBoard($id: ID!) {
  getBoard(id: $id) {
    id
    title
    columns {
      items {
        id
        boardID
        title
        position
        createdAt
        isArchived
        owner
      }
      nextToken
    }
    createdAt
    isArchived
    owner
  }
}
`;
export const listBoards = `query ListBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      columns {
        nextToken
      }
      createdAt
      isArchived
      owner
    }
    nextToken
  }
}
`;
export const getColumn = `query GetColumn($id: ID!) {
  getColumn(id: $id) {
    id
    boardID
    title
    position
    tasks {
      items {
        id
        columnID
        title
        description
        order
        createdAt
        isArchived
        owner
      }
      nextToken
    }
    createdAt
    isArchived
    owner
  }
}
`;
export const listColumns = `query ListColumns(
  $filter: ModelColumnFilterInput
  $limit: Int
  $nextToken: String
) {
  listColumns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boardID
      title
      position
      tasks {
        nextToken
      }
      createdAt
      isArchived
      owner
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    columnID
    title
    description
    order
    createdAt
    isArchived
    owner
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      columnID
      title
      description
      order
      createdAt
      isArchived
      owner
    }
    nextToken
  }
}
`;
