export const validateAccountRequest = (param) => ({
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
  phoneNumber: '233555555',
  emailAddress: 'test@test.com',
  user: 'ECM8790L',
  channelTypeCode: '1',
  triedNumber: '1',
  trace: true,
  accountType: 'N/A',
});

export const migrateSimRequest = (param) => ({
  min: param.min,
  iccidNew: param.iccidNew,
  codeDesactivation: '381',
  codeChangeIccid: 9,
  descriptionChangeIccid: 'Repo Voluntaria (Sin Costo)'
});