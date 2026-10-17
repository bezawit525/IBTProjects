import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function DishModal({ dish, onClose, triggerRef }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    return () => {
      triggerRef.current?.focus();
    };
  }, [triggerRef]);

  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close dish details"
        >
          ×
        </button>

        <h2 id="dish-modal-title">{dish.name}</h2>

        <p>Price: {dish.price} ETB</p>
        <p>Category: {dish.category}</p>

        {dish.spicy && <p>This dish is spicy.</p>}
      </section>
    </div>,
    document.body,
  );
}

export default DishModal;
