export interface ContactSubmissionInput {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
}

export interface ContactSubmissionRecord extends ContactSubmissionInput {
  id: string;
  referenceId: string;
  createdAt: string;
}
