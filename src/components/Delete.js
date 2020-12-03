import React from 'react';

export default function Delete({ handleDelete }) {
  return (
    <button
      type="button"
      className="close text-danger"
      aria-label="Close"
      onClick={handleDelete}
    >
      <i className="fas fa-times"></i>
    </button>
  );
}
