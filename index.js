module.exports = {
  SystemBusyError:                              'system busy, retry later',
  SuccessError:                                 'success',
  InternalError:                                'internal error, contact us',
  RequireAppKeyError:                           'require appKey',
  RequireAppSecretError:                        'require appSecret',
  RequireDeviceUdidError:                       'require deviceUdid',
  InvalidAppKeyError:                           'invalid appKey',
  InvalidAppSecretError:                        'invalid appSecret',
  RequireAppBundleError:                        'require appBundle',
  FailedToGetAppError:                          'rpc error, failed to Get App',
  RequireTokenError:                            'require token',
  InvalidTokenError:                            'invalid token',
  TokenExpiredError:                            'token is expired',
  FailedToGenerateTokenError:                   'failed to generate token, contact us',
  RequireClientKeyError:                        'require clientKey',
  RequireClientSecretError:                     'require clientSecret',
  ClientNotExistError:                          'client not exist',
  InvalidClientKeyError:                        'invalid clientKey',
  InvalidClientSecretError:                     'invalid clientSecret',
  RequireUsernameError:                         'require username',
  RequirePasswordError:                         'require password',
  UserNotExistError:                            'user not exist',
  PasswordNotMatchError:                        'password not match',
  FailedToCreateUserError:                      'failed to create user',
  FailedToHashPasswordError:                    'failed to hash password',
  FailedToSaveUserError:                        'failed to save user, please check if required field is correct',
  UserAlreadySignupError:                       'failed to signup, user already signup',
  FailedToValidateEmailError:                   'failed to validate email',
  FailedToSendMailError:                        'failed to send mail',
  AlreadyActivatedError:                        'already activated',
  InvalidPasswordResetCodeError:                'invalid password reset code',
  RequireUserOrCodeToResetPasswordError:        'require user or code to reset password',
  InvalidActivationCodeError:                   'invalid activation code',
  WrongParameterError:                          'wrong parameter',
  RequireOwnerError:                            'require owner',
  RequireDataFileError:                         'require uploaded data file',
  FileNotExistError:                            'file not exist',
  FailedToReadFileError:                        'error when read file',
  FailedToSaveFileError:                        'failed to save file',
  FailedToDeleteFileError:                      'failed to delete file',
  RequireFileBucketError:                       'require file bucket',
  RequireFilePathError:                         'require file path',
  FailedToGetDeviceError:                       'failed to get device, contact us',
  FailedToSaveDeviceError:                      'failed to create/update device, contact us',
  FailedToCreateDeviceError:                    'failed to create device, contact us',
  FailedToUpdateDeviceError:                    'failed to update device, contact us',
  FailedToFindRegionsError:                     'failed to find regions',
  FailedToEnsureDeviceError:                    'rpc error, failed to ensure device',
  RequirePoiError:                              'require poi',
  RequirePoiIdError:                            'require poi id',
  FailedToFindPoisError:                        'failed to find pois',
  FailedToGetPoiError:                          'rpc error, failed to get poi',
  FailedToUpdatePoiError:                       'failed to update poi',
  PoiNotExistError:                             'poi not exist',
  RequirePoiPullRequestError:                   'require poi pull request info',
  RequirePoiPullRequestIdError:                 'require poi pull request id',
  PoiNotReadyError:                             'poi not ready',
  FailedToFindPoiPullRequestError:              'failed to find poi pull request, contact us',
  PoiPullRequestNotExistError:                  'poi pull request not exist',
  PoiPullRequestNotActiveError:                 'poi pull request not active',
  PendingPoiPullRequestExistsError:             'pending poi pull request exists',
  FailedToUpdatePoiPullRequestError:            'failed to update poi pull request',
  RequireAttachmentError:                       'require attachment',
  RequireAttachmentIdError:                     'require attachment id',
  FailedToFindAttachmentError:                  'failed to find attachment',
  AttachmentNotExistError:                      'attachment not exist',
  FailedToCreateAttachmentError:                'failed to create attachment',
  FailedToUpdateAttachmentError:                'failed to update attachment',
  FailedToDestroyAttachmentError:               'failed to destroy attachment',
  RequireAppError:                              'require app',
  NotYourAppError:                              'app is not yours',
  FailedToFindAppError:                         'failed to get app, check if appKey is valid',
  AppNotExistError:                             'app not exist',
  FailedToUpdateAppError:                       'failed to update app',
  RequireAppIdError:                            'require app id',
  RequireAppPlatformSettingsIdError:            'require app platform settings id',
  FailedToFindAppPlatformSettingsError:         'failed to find app platform settings',
  AppPlatformSettingsNotExistError:             'app platform settings not exist',
  FailedToCreateAppPlatformSettingsError:       'failed to create app platform settings',
  FailedToUpdateAppPlatformSettingsError:       'failed to update app platform settings',
  FailedToDestroyAppPlatformSettingsError:      'failed to destroy app platform settings',
  FailedToUpdateAppLastOperationError:          'failed to update app last operation',
  RequireScenarioError:                         'require scenario',
  RequireScenarioIdError:                       'require scenario id',
  FailedToFindScenarioError:                    'failed to find scenario',
  ScenarioNotExistError:                        'scenario not exist',
  FailedToCreateScenarioError:                  'failed to create scenario',
  FailedToUpdateScenarioError:                  'failed to update scenario',
  FailedToDestroyScenarioError:                 'failed to destroy scenario',
  FailedToUpdateScenarioLastOperationError:     'failed to update scenario last operation',
  RequireAdIdError:                             'require ad id',
  FailedToFindAdError:                          'failed to find ad',
  AdNotExistError:                              'ad not exist',
  RequireAdError:                               'require ad',
  FailedToCreateAdError:                        'failed to create ad',
  FailedToUpdateAdError:                        'failed to update ad',
  FailedToDestroyAdError:                       'failed to destroy ad',
  FailedToUpdateAdLastOperationError:           'failed to update ad last operation',
  RequireUmmError:                              'require umm',
  RequirePoiIdOrUmmError:                       'require poi id or umm',
  RequireDeviceError:                           'require device',
  RequireAdClickError:                          'require ad click',
  FailedToCreateAdClickError:                   'failed to create ad click',
  InvalidAdSignatureError:                      'invalid ad signature',
  CubePointNotExistError:                       'cube point not exist',
  FailedToFindCubePointError:                   'failed to find cube point',
  CubePointAggregationFailedError:              'failed to aggregate cube point',
  FailedToFindResourceError:                    'failed to find specified resource',
  FailedToFindUserBehaviorsError:               'failed to find user behaviors',
  FailedToQueueDeviceDataCollectJobError:       'failed to queue device data collect job',
  FailedToQueuePoiImportJobError:               'failed to queue poi import job',
  FailedToQueuePoiExportJobError:               'failed to queue poi export job',
  RequireJobIdError:                            'require job id',
  FailedToGetJobError:                          'failed to get job status',
  FailedToFindJobError:                         'failed to find job'
};
