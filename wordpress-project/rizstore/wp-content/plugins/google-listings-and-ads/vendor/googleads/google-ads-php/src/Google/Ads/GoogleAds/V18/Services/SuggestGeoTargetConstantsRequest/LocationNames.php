<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v18/services/geo_target_constant_service.proto

namespace Google\Ads\GoogleAds\V18\Services\SuggestGeoTargetConstantsRequest;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A list of location names.
 *
 * Generated from protobuf message <code>google.ads.googleads.v18.services.SuggestGeoTargetConstantsRequest.LocationNames</code>
 */
class LocationNames extends \Google\Protobuf\Internal\Message
{
    /**
     * A list of location names.
     *
     * Generated from protobuf field <code>repeated string names = 2;</code>
     */
    private $names;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<string>|\Google\Protobuf\Internal\RepeatedField $names
     *           A list of location names.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V18\Services\GeoTargetConstantService::initOnce();
        parent::__construct($data);
    }

    /**
     * A list of location names.
     *
     * Generated from protobuf field <code>repeated string names = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getNames()
    {
        return $this->names;
    }

    /**
     * A list of location names.
     *
     * Generated from protobuf field <code>repeated string names = 2;</code>
     * @param array<string>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setNames($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->names = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(LocationNames::class, \Google\Ads\GoogleAds\V18\Services\SuggestGeoTargetConstantsRequest_LocationNames::class);

