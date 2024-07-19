export interface IPiece {
  name: string;
  color: string;
  role: string;
  src: string;

  moved?: boolean;
  isChecked?: boolean;
  lastMove?: string[];
  transformed?: boolean;
}
