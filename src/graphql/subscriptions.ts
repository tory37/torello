// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBoard = `subscription OnCreateBoard($owner: String!) {
  onCreateBoard(owner: $owner) {
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
    backgroundColor
    owner
  }
}
`;
export const onUpdateBoard = `subscription OnUpdateBoard($owner: String!) {
  onUpdateBoard(owner: $owner) {
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
    backgroundColor
    owner
  }
}
`;
export const onDeleteBoard = `subscription OnDeleteBoard($owner: String!) {
  onDeleteBoard(owner: $owner) {
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
    backgroundColor
    owner
  }
}
`;
export const onCreateColumn = `subscription OnCreateColumn($owner: String!) {
  onCreateColumn(owner: $owner) {
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
export const onUpdateColumn = `subscription OnUpdateColumn($owner: String!) {
  onUpdateColumn(owner: $owner) {
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
export const onDeleteColumn = `subscription OnDeleteColumn($owner: String!) {
  onDeleteColumn(owner: $owner) {
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
export const onCreateTask = `subscription OnCreateTask($owner: String!) {
  onCreateTask(owner: $owner) {
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
export const onUpdateTask = `subscription OnUpdateTask($owner: String!) {
  onUpdateTask(owner: $owner) {
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
export const onDeleteTask = `subscription OnDeleteTask($owner: String!) {
  onDeleteTask(owner: $owner) {
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
