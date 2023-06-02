'use client';

import style from './ProductCommentBox.module.scss';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';

export default function ProductCommentBox() {
  const [comment, setComment] = useState('');

  return (
    // server actions don't need default prevent
    <form>
      <textarea
        className={style.form}
        value={comment}
        onChange={() => {
          setComment(Event.currentTarget.value);
        }}
      />
      {/* instead of onClick => formAction */}
      <button formAction={createOrUpdateComment}>Submit Comment</button>
    </form>
  );
}
