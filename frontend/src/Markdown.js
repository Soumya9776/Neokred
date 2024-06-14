import React, { useState } from 'react';
import { marked } from 'marked';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const TextArea = styled.textarea`
  width: 50%;
  padding: 20px;
  font-size: 16px;
`;

const Preview = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #f6f6f6;
  border-left: 1px solid #ddd;
  overflow-y: auto;
`;

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <Container>
      <TextArea value={markdown} onChange={handleChange} placeholder="Type your Markdown here..." />
      <Preview dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  );
};

export default MarkdownEditor;
