export const generatePinRequest = (param) => ({
  headerRequest: {
    transactionId: 'string',
    system: 'string',
    target: 'string',
    user: 'string',
    password: 'string',
    requestDate: '2008-09-28T20:49:45',
    ipApplication: 'string',
    traceabilityId: 'string',
  },
  documentClient: param.documentClient,
  contactData: param.contactData,
  contactType: param.contactType,
  user: 'ECM8790L',
});

export const validatePinRequest = (param) => ({
  headerRequest: {
    transactionId: 'string',
    system: 'string',
    target: 'string',
    user: 'string',
    password: 'string',
    requestDate: '2008-09-28T20:49:45',
    ipApplication: 'string',
    traceabilityId: 'string',
  },
  documentClient: param.documentClient,
  user: 'ECM8790L',
  method: 'PIN',
  pinNumber: param.pinNumber,
});
