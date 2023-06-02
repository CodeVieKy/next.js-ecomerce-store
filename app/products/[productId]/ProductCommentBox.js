'use client';

import style from './ProductCommentBox.module.scss';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';

export default function ProductCommentBox(props) {
  const [comment, setComment] = useState('');

  return (
    // server actions don't need default prevent
    // In order to use ServerAction you need to update next.js config with serverActions: true,
    <form>
      <textarea
        className={style.form}
        value={comment}
        onChange={(event) => {
          setComment(event.currentTarget.value);
        }}
      />
      {/* instead of onClick => formAction and actions always async*/}
      <button
        formAction={async () => {
          await createOrUpdateComment(props.productId, comment);
        }}
      >
        Submit Comment
      </button>
    </form>
  );
}
