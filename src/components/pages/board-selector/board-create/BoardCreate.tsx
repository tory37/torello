// import React from "react";
// import useForm from 'react-hook-form';
// import {useMutation} from '@apollo/react-hooks';
// import gql from 'graphql-tag';
// import {
//   Card,
//   CardActionArea,
//   Typography,
//   CardMedia,
//   CardContent
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { GetBackgroundColors } from "utils/Board";
// import { CreateBoardMutation, CreateBoardMutationVariables } from "API";

// const getStyles = (color: string) => {
//   return makeStyles({
//     card: {
//       width: "250px"
//     },
//     previewImage: {
//       backgroundColor: color,
//       height: "50px"
//     }
//   });
// };

// const BoardPreview = () => {
//   const {register, handleSubmit } = useForm();
//   const [addBoard, { data }] = useMutation<
//     CreateBoardMutation,
//     CreateBoardMutationVariables
//   >(gql(listBoards), { variables: { limit: 100 } });

//   const backgroundColors = GetBackgroundColors();
//   const classes = getStyles(backgroundColor)();

//   return (
//     <Card className={classes.card}>
//       <CardActionArea component={Link} to="/boards">
//         <CardMedia>
//           <form onSubmit={}
//           <div className={classes.previewImage} />
//         </CardMedia>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default BoardPreview;
