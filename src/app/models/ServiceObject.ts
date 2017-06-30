export interface ServiceObject {
  errorCode: number;
  errorMessage: string;
  nodeId: string;
  validationErrors: Array<any>;
  successful: boolean;
  apiVersion: number;
}
