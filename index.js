module.exports = {
  systemBusy:                         { code: -1,    message: 'system busy, retry later'},
  success:                            { code: 0,     message: 'success'},
  internalError:                      { code: 1,     message: 'internal error, contact us'},
  requireAppKey:                      { code: 10001, message: 'require appKey'},
  requireAppSecret:                   { code: 10002, message: 'require appSecret'},
  requireDeviceUdid:                  { code: 10003, message: 'require deviceUdid'},
  invalidAppKey:                      { code: 10004, message: 'invalid appKey'},
  invalidAppSecret:                   { code: 10005, message: 'invalid appSecret'},
  requireAppBundle:                   { code: 10101, message: 'require appBundle'},
  failedToGetApp:                     { code: 10102, message: 'rpc error, failed to Get App'},
  requireToken:                       { code: 11001, message: 'require token'},
  invalidToken:                       { code: 11002, message: 'invalid token'},
  tokenExpired:                       { code: 11003, message: 'token is expired'},
  failedToGenerateToken:              { code: 11004, message: 'failed to generate token, contact us'},
  requireClientKey:                   { code: 12001, message: 'require clientKey'},
  requireClientSecret:                { code: 12002, message: 'require clientSecret'},
  clientNotExist:                     { code: 12003, message: 'client not exist'},
  invalidClientKey:                   { code: 12004, message: 'invalid clientKey'},
  invalidClientSecret:                { code: 12005, message: 'invalid clientSecret'},
  requireUsername:                    { code: 20001, message: 'require username'},
  requirePassword:                    { code: 20002, message: 'require password'},
  userNotExist:                       { code: 20003, message: 'user not exist'},
  passwordNotMatch:                   { code: 20004, message: 'password not match'},
  failedToCreateUser:                 { code: 20005, message: 'failed to create user'},
  failedToHashPassword:               { code: 20006, message: 'failed to hash password'},
  failedToSaveUser:                   { code: 20007, message: 'failed to save user, please check if required field is correct'},
  userAlreadySignup:                  { code: 20008, message: 'failed to signup, user already signup'},
  failedToValidateEmail:              { code: 21001, message: 'failed to validate email'},
  failedToSendMail:                   { code: 21002, message: 'failed to send mail'},
  alreadyActivated:                   { code: 21003, message: 'already activated'},
  invalidPasswordResetCode:           { code: 21004, message: 'invalid password reset code'},
  requireUserOrCodeToResetPassword:   { code: 21005, message: 'require user or code to reset password'},
  invalidActivationCode:              { code: 21006, message: 'invalid activation code'},
  wrongParameter:                     { code: 30001, message: 'wrong parameter'},
  requireOwner:                       { code: 30002, message: 'require owner'},
  requireDataFile:                    { code: 40001, message: 'require uploaded data file'},
  fileNotExist:                       { code: 40002, message: 'file not exist'},
  failedToReadFile:                   { code: 40003, message: 'error when read file'},
  failedToSaveFile:                   { code: 40004, message: 'failed to save file'},
  failedToDeleteFile:                 { code: 40005, message: 'failed to delete file'},
  requireFileBucket:                  { code: 40006, message: 'require file bucket'},
  requireFilePath:                    { code: 40007, message: 'require file path'},
  failedToGetDevice:                  { code: 40801, message: 'failed to get device, contact us'},
  failedToSaveDevice:                 { code: 40802, message: 'failed to create/update device, contact us'},
  failedToCreateDevice:               { code: 40803, message: 'failed to create device, contact us'},
  failedToUpdateDevice:               { code: 40804, message: 'failed to update device, contact us'},
  failedToFindRegions:                { code: 40805, message: 'failed to find regions'},
  failedToEnsureDevice:               { code: 40806, message: 'rpc error, failed to ensure device'},
  requirePoi:                         { code: 41001, message: 'require poi'},
  requirePoiId:                       { code: 41002, message: 'require poi id'},
  failedToFindPois:                   { code: 41003, message: 'failed to find pois'},
  failedToGetPoi:                     { code: 41004, message: 'rpc error, failed to get poi'},
  failedToUpdatePoi:                  { code: 41005, message: 'failed to update poi'},
  poiNotExist:                        { code: 41006, message: 'poi not exist'},
  requirePoiPullRequest:              { code: 41101, message: 'require poi pull request info'},
  requirePoiPullRequestId:            { code: 41102, message: 'require poi pull request id'},
  poiNotReady:                        { code: 41103, message: 'poi not ready'},
  failedToFindPoiPullRequest:         { code: 41104, message: 'failed to find poi pull request, contact us'},
  poiPullRequestNotExist:             { code: 41105, message: 'poi pull request not exist'},
  poiPullRequestNotActive:            { code: 41106, message: 'poi pull request not active'},
  pendingPoiPullRequestExists:        { code: 41107, message: 'pending poi pull request exists'},
  failedToUpdatePoiPullRequest:       { code: 41108, message: 'failed to update poi pull request'},
  requireAttachment:                  { code: 42001, message: 'require attachment'},
  requireAttachmentId:                { code: 42002, message: 'require attachment id'},
  failedToFindAttachment:             { code: 42003, message: 'failed to find attachment'},
  attachmentNotExist:                 { code: 42004, message: 'attachment not exist'},
  failedToCreateAttachment:           { code: 42005, message: 'failed to create attachment'},
  failedToUpdateAttachment:           { code: 42006, message: 'failed to update attachment'},
  failedToDestroyAttachment:          { code: 42007, message: 'failed to destroy attachment'},
  requireApp:                         { code: 43001, message: 'require app'},
  notYourApp:                         { code: 43002, message: 'app is not yours'},
  failedToFindApp:                    { code: 43003, message: 'failed to get app, check if appKey is valid'},
  appNotExist:                        { code: 43004, message: 'app not exist'},
  failedToUpdateApp:                  { code: 43005, message: 'failed to update app'},
  requireAppId:                       { code: 43006, message: 'require app id'},
  requireAppPlatformSettingsId:       { code: 43101, message: 'require app platform settings id'},
  failedToFindAppPlatformSettings:    { code: 43102, message: 'failed to find app platform settings'},
  appPlatformSettingsNotExist:        { code: 43103, message: 'app platform settings not exist'},
  failedToCreateAppPlatformSettings:  { code: 43104, message: 'failed to create app platform settings'},
  failedToUpdateAppPlatformSettings:  { code: 43105, message: 'failed to update app platform settings'},
  failedToDestroyAppPlatformSettings: { code: 43106, message: 'failed to destroy app platform settings'},
  failedToUpdateAppLastOperation:     { code: 43801, message: 'failed to update app last operation'},
  requireScenario:                    { code: 44001, message: 'require scenario'},
  requireScenarioId:                  { code: 44002, message: 'require scenario id'},
  failedToFindScenario:               { code: 44003, message: 'failed to find scenario'},
  scenarioNotExist:                   { code: 44004, message: 'scenario not exist'},
  failedToCreateScenario:             { code: 44005, message: 'failed to create scenario'},
  failedToUpdateScenario:             { code: 44006, message: 'failed to update scenario'},
  failedToDestroyScenario:            { code: 44007, message: 'failed to destroy scenario'},
  failedToUpdateScenarioLastOperation:{ code: 44801, message: 'failed to update scenario last operation'},
  requireAdId:                        { code: 45001, message: 'require ad id'},
  failedToFindAd:                     { code: 45002, message: 'failed to find ad'},
  adNotExist:                         { code: 45003, message: 'ad not exist'},
  requireAd:                          { code: 45004, message: 'require ad'},
  failedToCreateAd:                   { code: 45005, message: 'failed to create ad'},
  failedToUpdateAd:                   { code: 45006, message: 'failed to update ad'},
  failedToDestroyAd:                  { code: 45007, message: 'failed to destroy ad'},
  failedToUpdateAdLastOperation:      { code: 45008, message: 'failed to update ad last operation'},
  requireUmm:                         { code: 50001, message: 'require umm'},
  requirePoiIdOrUmm:                  { code: 50002, message: 'require poi id or umm'},
  requireDevice:                      { code: 50003, message: 'require device'},
  requireAdClick:                     { code: 50004, message: 'require ad click'},
  failedToCreateAdClick:              { code: 50005, message: 'failed to create ad click'},
  invalidAdSignature:                 { code: 50006, message: 'invalid ad signature'},
  cubePointNotExist:                  { code: 51001, message: 'cube point not exist'},
  failedToFindCubePoint:              { code: 51002, message: 'failed to find cube point'},
  cubePointAggregationFailed:         { code: 51003, message: 'failed to aggregate cube point'},
  failedToFindResource:               { code: 52001, message: 'failed to find specified resource'},
  failedToFindUserBehaviors:          { code: 52002, message: 'failed to find user behaviors'},
  failedToQueueDeviceDataCollectJob:  { code: 70001, message: 'failed to queue device data collect job'},
  failedToQueuePoiImportJob:          { code: 70101, message: 'failed to queue poi import job'},
  failedToQueuePoiExportJob:          { code: 70102, message: 'failed to queue poi export job'},
  requireJobId:                       { code: 80001, message: 'require job id'},
  failedToGetJob:                     { code: 80002, message: 'failed to get job status'}
};
