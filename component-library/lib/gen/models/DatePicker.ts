/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DatePicker
 */
export interface DatePicker {
    /**
     * 
     * @type {string}
     * @memberof DatePicker
     */
    componentType?: DatePickerComponentTypeEnum;
}


/**
 * @export
 */
export const DatePickerComponentTypeEnum = {
    DatePicker: 'DatePicker'
} as const;
export type DatePickerComponentTypeEnum = typeof DatePickerComponentTypeEnum[keyof typeof DatePickerComponentTypeEnum];


/**
 * Check if a given object implements the DatePicker interface.
 */
export function instanceOfDatePicker(value: object): value is DatePicker {
    return true;
}

export function DatePickerFromJSON(json: any): DatePicker {
    return DatePickerFromJSONTyped(json, false);
}

export function DatePickerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatePicker {
    if (json == null) {
        return json;
    }
    return {
        
        'componentType': json['component_type'] == null ? undefined : json['component_type'],
    };
}

export function DatePickerToJSON(value?: DatePicker | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component_type': value['componentType'],
    };
}

