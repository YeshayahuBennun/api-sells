declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    /*It is the same structure of the class isAuthentic, line 36
      request.user = {
      id: sub,
    };*/
  }
}
