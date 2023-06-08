'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateComment } from './actions';
import style from './ProductCommentBox.module.scss';

export default function ProductCommentBox(props) {
  const [comment, setComment] = useState('');
  const router = useRouter();
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
          router.refresh();
          await createOrUpdateComment(props.productId, comment);
        }}
      >
        Submit Comment
      </button>
    </form>
  );
}
