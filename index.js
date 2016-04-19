module.exports = {
  systemBusy:                         { code: -1,     message: 'system busy, retry later'},
  success:                            { code: 0,      message: 'success'},
  internalError:                      { code: 1,      message: 'internal error, contact us'},
  requireAppKey:                      { code: 10001,  message: 'require appKey'},
  requireAppSecret:                   { code: 10002,  message: 'require appSecret'},
  requireDeviceUdid:                  { code: 10003,  message: 'require deviceUdid'},
  invalidAppKey:                      { code: 10004,  message: 'invalid appKey'},
  invalidAppSecret:                   { code: 10005,  message: 'invalid appSecret'},
  failedToSaveDevice:                 { code: 10006,  message: 'failed to create/update device, contact us'},
  invalidToken:                       { code: 10007,  message: 'invalid token'},
  tokenExpired:                       { code: 10008,  message: 'token is expired'},
  failedToGenerateToken:              { code: 10009,  message: 'failed to generate token, contact us'},
  requireToken:                       { code: 10010,  message: 'require token'},
  requireDataFile:                    { code: 10011,  message: 'require uploaded data file'},
  requireAppBundle:                   { code: 10012,  message: 'require appBundle'},
  failedToGetApp:                     { code: 10013,  message: 'rpc error, failed to Get App'},
  requireUserId:                      { code: 10014,  message: 'require user id'},
  requireUsername:                    { code: 11001,  message: 'require username'},
  requirePassword:                    { code: 11002,  message: 'require password'},
  userNotExist:                       { code: 11003,  message: 'user not exist'},
  passwordNotMatch:                   { code: 11004,  message: 'password not match'},
  failedToCreateUser:                 { code: 11006,  message: 'failed to create user'},
  failedToHashPassword:               { code: 11007,  message: 'failed to hash password'},
  failedToSaveUser:                   { code: 11008,  message: 'failed to save user, please check if required field is correct'},
  failedToSaveFile:                   { code: 11009,  message: 'failed to save file'},
  failedToDeleteFile:                 { code: 11010,  message: 'failed to delete file'},
  fileNotExist:                       { code: 11011,  message: 'file not exist'},
  failedToReadFile:                   { code: 11012,  message: 'error when read file'},
  requireClientKey:                   { code: 11014,  message: 'require clientKey'},
  requireClientSecret:                { code: 11015,  message: 'require clientSecret'},
  clientNotExist:                     { code: 11016,  message: 'client not exist'},
  invalidClientKey:                   { code: 11017,  message: 'invalid clientKey'},
  invalidClientSecret:                { code: 11018,  message: 'invalid clientSecret'},
  failedToCreateDevice:               { code: 40001,  message: 'failed to create device, contact us'},
  failedToGetDevice:                  { code: 40002,  message: 'failed to get device, contact us'},
  failedToUpdateDevice:               { code: 40003,  message: 'failed to update device, contact us'},
  failedToQueueDeviceDataCollectJob:  { code: 40004,  message: 'failed to queue device data collect job'},
  failedToQueuePoiImportJob:          { code: 40005,  message: 'failed to queue poi import job'},
  failedToFindRegions:                { code: 40006,  message: 'failed to find regions'},
  failedToFindPois:                   { code: 40007,  message: 'failed to find pois'},
  failedToEnsureDevice:               { code: 40008,  message: 'rpc error, failed to ensure device'},
  requirePoiId:                       { code: 40009,  message: 'require poi id'},
  poiNotExist:                        { code: 40010,  message: 'poi not exist'},
  requirePullRequest:                 { code: 40011,  message: 'require pull request info'},
  poiNotReady:                        { code: 40012,  message: 'poi not ready'}
};
