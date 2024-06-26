import { propsMatchState } from "./props-match-state.js";
import { slzState } from "./state.js";
import { validate } from "./validate.js";
import {
  minStringSize,
  validName,
  validUrl,
  isNotNullOrEmptyString,
  isEmptyOrValidUrl,
  getTierSubnetsFromVpcData,
  validTmosAdminPassword
} from "./lib-utils.js";
import {
  toggleMarginBottom,
  saveChangeButtonClass,
  forceShowForm,
  toggleFormComponentName,
  disableDeleteMessage,
  toggleFormDeleteDisabled,
  addClassName,
  getRuleProtocol,
  getSubRule,
  getCodeMirrorDisplay,
  buildComposedComponentNameHelperText,
  getFormCrudOperations,
  getSlzArrayFormArrayData,
  formatFieldName,
  subnetGatewayToggleShouldBeDisabled,
  subnetTierVpcHasNoEnabledGateways,
  parentHasRandomSuffix,
  subnetTierInitState,
  nextSubnetTierIndex,
  subnetTierModalList,
  subnetTierFormList,
  subnetTierName,
  getCosKeysFromBucket,
  getBucketInstance,
  codeMirrorJson
} from "./form-utils.js";
import {
  hasInvalidName,
  vpcFieldCheck,
  hasInvalidSshPublicKey,
  hasInvalidWorkers,
  iamAccountSettingsInvalidRange,
  iamAccountSettingsInvalidIpString,
  iamAccountSettingsInvalidNumber,
  hasInvalidRuleProtocol,
  hasInvalidCidrOrAddress,
  isInvalidPrefix,
} from "./error-text-utils.js";
import { disableSave } from "./disable-save.js";
import { stateInit } from "./component-state-init.js";
import { buildNewEncryptionKey, newFormClusterInstance } from "./builders.js";
import { checkNullorEmptyString } from "./store/utils.js";
import {
  nameValidationExp,
  maskFieldsExpStep1ReplacePublicKey,
  maskFieldsExpStep2ReplaceTmosAdminPassword,
  maskFieldsExpStep3ReplaceLicensePassword,
  maskFieldsExpStep4HideValue,
  emailValidationExp,
  reservedSubnetNameExp,
  conditionOperators,
  restrictMenuItems,
  iamItems,
  patterns,
  edgeNetworkingPatterns
} from "./constants.js";
import {
  newDefaultManagementServer,
  newDefaultWorkloadServer,
  newDefaultManagementCluster,
  newDefaultWorkloadCluster,
  newDefaultKms
} from "./store/defaults.js";
import {
  prependEmptyStringToArrayOnNullOrEmptyString,
  defaultToEmptyStringIfValueNull
} from "./store/utils.js";

export {
  defaultToEmptyStringIfValueNull,
  checkNullorEmptyString,
  prependEmptyStringToArrayOnNullOrEmptyString,
  nameValidationExp,
  maskFieldsExpStep1ReplacePublicKey,
  maskFieldsExpStep2ReplaceTmosAdminPassword,
  maskFieldsExpStep3ReplaceLicensePassword,
  maskFieldsExpStep4HideValue,
  emailValidationExp,
  reservedSubnetNameExp,
  conditionOperators,
  restrictMenuItems,
  iamItems,
  patterns,
  edgeNetworkingPatterns,
  newDefaultManagementServer,
  newDefaultWorkloadServer,
  newDefaultManagementCluster,
  newDefaultWorkloadCluster,
  newDefaultKms,
  buildNewEncryptionKey,
  newFormClusterInstance,
  stateInit,
  getCodeMirrorDisplay,
  toggleFormDeleteDisabled,
  addClassName,
  getRuleProtocol,
  getSubRule,
  forceShowForm,
  toggleFormComponentName,
  disableDeleteMessage,
  saveChangeButtonClass,
  toggleMarginBottom,
  propsMatchState,
  slzState,
  validate,
  minStringSize,
  validName,
  validUrl,
  isNotNullOrEmptyString,
  isEmptyOrValidUrl,
  getTierSubnetsFromVpcData,
  validTmosAdminPassword,
  buildComposedComponentNameHelperText,
  getFormCrudOperations,
  getSlzArrayFormArrayData,
  formatFieldName,
  subnetGatewayToggleShouldBeDisabled,
  subnetTierVpcHasNoEnabledGateways,
  parentHasRandomSuffix,
  subnetTierInitState,
  nextSubnetTierIndex,
  subnetTierModalList,
  subnetTierFormList,
  subnetTierName,
  getCosKeysFromBucket,
  getBucketInstance,
  hasInvalidName,
  vpcFieldCheck,
  hasInvalidSshPublicKey,
  hasInvalidWorkers,
  iamAccountSettingsInvalidRange,
  iamAccountSettingsInvalidIpString,
  iamAccountSettingsInvalidNumber,
  hasInvalidRuleProtocol,
  hasInvalidCidrOrAddress,
  isInvalidPrefix,
  disableSave,
  codeMirrorJson
};
