import { useState } from "react";

import { Box, Button, Container, Input } from "@chakra-ui/react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const loadComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
    console.log(data);
  };

  const addComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // setComments(data);
    console.log(data);
  };

  const deleteComment = async (id) => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    loadComments();
  };

  return (
    <Box>
      <Container maxW="1000px">
        <Box>Comments</Box>
        {comments.map((comment) => (
          <Box key={comment.id} my="8px">
            {comment.id} | {comment.comment}
            <Button ml="16px" onClick={() => deleteComment(comment.id)}>
              X
            </Button>
          </Box>
        ))}
        <Button onClick={loadComments}>SHOW COMMENTS</Button>

        <Input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          mt="20px"
          mb="8px"
        />
        <Button onClick={addComment}>Add Comment</Button>
      </Container>
    </Box>
  );
};

export default Comments;
