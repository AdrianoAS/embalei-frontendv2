// Alerta de observação do pedido (campo OrderComments da IDWorks). Quando o
// pedido bipado tem observação, mostra um popup na abertura e mantém uma barra
// pequena piscando fixa abaixo do header — clicável para reabrir o popup.

interface Props {
  comments: string | null;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OrderCommentsAlert({ comments, open, onOpen, onClose }: Props) {
  if (!comments) return null;

  return (
    <>
      <button type="button" className="order-comments-bar" onClick={onOpen}>
        <span className="order-comments-bar__dot" aria-hidden="true" />
        <WarningIcon />
        <span className="order-comments-bar__text">
          Observação do pedido — toque para ver
        </span>
      </button>

      {open && (
        <div
          className="order-comments-scrim"
          role="dialog"
          aria-modal="true"
          aria-label="Observação do pedido"
          onClick={onClose}
        >
          <div className="order-comments-modal" onClick={(event) => event.stopPropagation()}>
            <div className="order-comments-modal__head">
              <WarningIcon />
              <h2>Observação do pedido</h2>
            </div>
            <p className="order-comments-modal__body">{comments}</p>
            <button type="button" className="btn primary" onClick={onClose}>
              Entendi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
