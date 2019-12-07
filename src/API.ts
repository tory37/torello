/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateBoardInput = {
  id?: string | null,
  title: string,
  createdAt?: number | null,
  isArchived?: boolean | null,
};

export type ModelBoardConditionInput = {
  title?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBoardInput = {
  id: string,
  title?: string | null,
  createdAt?: number | null,
  isArchived?: boolean | null,
};

export type DeleteBoardInput = {
  id?: string | null,
};

export type CreateColumnInput = {
  id?: string | null,
  boardID: string,
  title: string,
  position: number,
  createdAt?: number | null,
  isArchived?: boolean | null,
};

export type ModelColumnConditionInput = {
  boardID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelIntInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelColumnConditionInput | null > | null,
  or?: Array< ModelColumnConditionInput | null > | null,
  not?: ModelColumnConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateColumnInput = {
  id: string,
  boardID?: string | null,
  title?: string | null,
  position?: number | null,
  createdAt?: number | null,
  isArchived?: boolean | null,
};

export type DeleteColumnInput = {
  id?: string | null,
};

export type CreateTaskInput = {
  id?: string | null,
  columnID: string,
  title: string,
  description?: string | null,
  order: number,
  createdAt?: number | null,
  isArchived?: boolean | null,
};

export type ModelTaskConditionInput = {
  columnID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  order?: ModelIntInput | null,
  createdAt?: ModelIntInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type UpdateTaskInput = {
  id: string,
  columnID?: string | null,
  title?: string | null,
  description?: string | null,
  order?: number | null,
  createdAt?: number | null,
  isArchived?: boolean | null,
};

export type DeleteTaskInput = {
  id?: string | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelColumnFilterInput = {
  id?: ModelIDInput | null,
  boardID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  position?: ModelIntInput | null,
  createdAt?: ModelIntInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelColumnFilterInput | null > | null,
  or?: Array< ModelColumnFilterInput | null > | null,
  not?: ModelColumnFilterInput | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  columnID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  order?: ModelIntInput | null,
  createdAt?: ModelIntInput | null,
  isArchived?: ModelBooleanInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type CreateColumnMutationVariables = {
  input: CreateColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type CreateColumnMutation = {
  createColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type UpdateColumnMutationVariables = {
  input: UpdateColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type UpdateColumnMutation = {
  updateColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type DeleteColumnMutationVariables = {
  input: DeleteColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type DeleteColumnMutation = {
  deleteColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      title: string,
      columns:  {
        __typename: "ModelColumnConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
      isArchived: boolean | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetColumnQueryVariables = {
  id: string,
};

export type GetColumnQuery = {
  getColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type ListColumnsQueryVariables = {
  filter?: ModelColumnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColumnsQuery = {
  listColumns:  {
    __typename: "ModelColumnConnection",
    items:  Array< {
      __typename: "Column",
      id: string,
      boardID: string,
      title: string,
      position: number,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      createdAt: number | null,
      isArchived: boolean | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      columnID: string,
      title: string,
      description: string | null,
      order: number,
      createdAt: number | null,
      isArchived: boolean | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBoardSubscriptionVariables = {
  owner: string,
};

export type OnCreateBoardSubscription = {
  onCreateBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnUpdateBoardSubscriptionVariables = {
  owner: string,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnDeleteBoardSubscriptionVariables = {
  owner: string,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard:  {
    __typename: "Board",
    id: string,
    title: string,
    columns:  {
      __typename: "ModelColumnConnection",
      items:  Array< {
        __typename: "Column",
        id: string,
        boardID: string,
        title: string,
        position: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnCreateColumnSubscriptionVariables = {
  owner: string,
};

export type OnCreateColumnSubscription = {
  onCreateColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnUpdateColumnSubscriptionVariables = {
  owner: string,
};

export type OnUpdateColumnSubscription = {
  onUpdateColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnDeleteColumnSubscriptionVariables = {
  owner: string,
};

export type OnDeleteColumnSubscription = {
  onDeleteColumn:  {
    __typename: "Column",
    id: string,
    boardID: string,
    title: string,
    position: number,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        columnID: string,
        title: string,
        description: string | null,
        order: number,
        createdAt: number | null,
        isArchived: boolean | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  owner: string,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    __typename: "Task",
    id: string,
    columnID: string,
    title: string,
    description: string | null,
    order: number,
    createdAt: number | null,
    isArchived: boolean | null,
    owner: string | null,
  } | null,
};
