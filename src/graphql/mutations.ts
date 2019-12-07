// tslint:disable
// this is an auto generated file. This will be overwritten

export const createBoard = `mutation CreateBoard(
  $input: CreateBoardInput!
  $condition: ModelBoardConditionInput
) {
  createBoard(input: $input, condition: $condition) {
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
export const updateBoard = `mutation UpdateBoard(
  $input: UpdateBoardInput!
  $condition: ModelBoardConditionInput
) {
  updateBoard(input: $input, condition: $condition) {
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
export const deleteBoard = `mutation DeleteBoard(
  $input: DeleteBoardInput!
  $condition: ModelBoardConditionInput
) {
  deleteBoard(input: $input, condition: $condition) {
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
export const createColumn = `mutation CreateColumn(
  $input: CreateColumnInput!
  $condition: ModelColumnConditionInput
) {
  createColumn(input: $input, condition: $condition) {
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
export const updateColumn = `mutation UpdateColumn(
  $input: UpdateColumnInput!
  $condition: ModelColumnConditionInput
) {
  updateColumn(input: $input, condition: $condition) {
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
export const deleteColumn = `mutation DeleteColumn(
  $input: DeleteColumnInput!
  $condition: ModelColumnConditionInput
) {
  deleteColumn(input: $input, condition: $condition) {
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
export const createTask = `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
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
export const updateTask = `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
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
export const deleteTask = `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
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
