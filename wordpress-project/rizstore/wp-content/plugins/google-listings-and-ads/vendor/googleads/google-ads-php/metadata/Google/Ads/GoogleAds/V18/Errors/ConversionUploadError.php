<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v18/errors/conversion_upload_error.proto

namespace GPBMetadata\Google\Ads\GoogleAds\V18\Errors;

class ConversionUploadError
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
=google/ads/googleads/v18/errors/conversion_upload_error.protogoogle.ads.googleads.v18.errors"�
ConversionUploadErrorEnum"�
ConversionUploadError
UNSPECIFIED 
UNKNOWN#
TOO_MANY_CONVERSIONS_IN_REQUEST
UNPARSEABLE_GCLID
CONVERSION_PRECEDES_EVENT*
EXPIRED_EVENT+
TOO_RECENT_EVENT,
EVENT_NOT_FOUND-
UNAUTHORIZED_CUSTOMER 
TOO_RECENT_CONVERSION_ACTION
6
2CONVERSION_TRACKING_NOT_ENABLED_AT_IMPRESSION_TIMEQ
MEXTERNAL_ATTRIBUTION_DATA_SET_FOR_NON_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTIONQ
MEXTERNAL_ATTRIBUTION_DATA_NOT_SET_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTIONF
BORDER_ID_NOT_PERMITTED_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION
ORDER_ID_ALREADY_IN_USE
DUPLICATE_ORDER_ID
TOO_RECENT_CALL
EXPIRED_CALL
CALL_NOT_FOUND
CONVERSION_PRECEDES_CALL0
,CONVERSION_TRACKING_NOT_ENABLED_AT_CALL_TIME$
 UNPARSEABLE_CALLERS_PHONE_NUMBER#
CLICK_CONVERSION_ALREADY_EXISTS"
CALL_CONVERSION_ALREADY_EXISTS)
%DUPLICATE_CLICK_CONVERSION_IN_REQUEST(
$DUPLICATE_CALL_CONVERSION_IN_REQUEST
CUSTOM_VARIABLE_NOT_ENABLED&
"CUSTOM_VARIABLE_VALUE_CONTAINS_PII
INVALID_CUSTOMER_FOR_CLICK
INVALID_CUSTOMER_FOR_CALL,
(CONVERSION_NOT_COMPLIANT_WITH_ATT_POLICY 
CLICK_NOT_FOUND!
INVALID_USER_IDENTIFIER"N
JEXTERNALLY_ATTRIBUTED_CONVERSION_ACTION_NOT_PERMITTED_WITH_USER_IDENTIFIER#
UNSUPPORTED_USER_IDENTIFIER$
GBRAID_WBRAID_BOTH_SET&
UNPARSEABLE_WBRAID\'
UNPARSEABLE_GBRAID(<
8ONE_PER_CLICK_CONVERSION_ACTION_NOT_PERMITTED_WITH_BRAID.7
3CUSTOMER_DATA_POLICY_PROHIBITS_ENHANCED_CONVERSIONS/-
)CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS0
ORDER_ID_CONTAINS_PII17
3CUSTOMER_NOT_ENABLED_ENHANCED_CONVERSIONS_FOR_LEADS2
INVALID_JOB_ID4
NO_CONVERSION_ACTION_FOUND5"
INVALID_CONVERSION_ACTION_TYPE6B�
#com.google.ads.googleads.v18.errorsBConversionUploadErrorProtoPZEgoogle.golang.org/genproto/googleapis/ads/googleads/v18/errors;errors�GAA�Google.Ads.GoogleAds.V18.Errors�Google\\Ads\\GoogleAds\\V18\\Errors�#Google::Ads::GoogleAds::V18::Errorsbproto3'
        , true);
        static::$is_initialized = true;
    }
}

