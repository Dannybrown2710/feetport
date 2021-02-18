export interface Leave {
  title: string;
  code: string;
  priority: number;
  is_carry_forward: boolean;
  is_proof_required: boolean;
  purpose: string[];
}
