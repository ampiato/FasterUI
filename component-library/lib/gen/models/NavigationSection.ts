/* tslint:disable */
/* eslint-disable */
/**
 * FasterUI
 * A framework for building beautiful UIs. Pronto!
 *
 * The version of the OpenAPI document: 0.1.1
 * Contact: tomas.krejci@ampiato.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Component } from './Component';
import {
    ComponentFromJSON,
    ComponentFromJSONTyped,
    ComponentToJSON,
} from './Component';

/**
 * 
 * @export
 * @interface NavigationSection
 */
export interface NavigationSection {
    /**
     * 
     * @type {string}
     * @memberof NavigationSection
     */
    componentType?: NavigationSectionComponentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof NavigationSection
     */
    title?: string;
    /**
     * 
     * @type {Array<Component>}
     * @memberof NavigationSection
     */
    children: Array<Component>;
}


/**
 * @export
 */
export const NavigationSectionComponentTypeEnum = {
    NavigationSection: 'NavigationSection'
} as const;
export type NavigationSectionComponentTypeEnum = typeof NavigationSectionComponentTypeEnum[keyof typeof NavigationSectionComponentTypeEnum];


/**
 * Check if a given object implements the NavigationSection interface.
 */
export function instanceOfNavigationSection(value: object): value is NavigationSection {
    if (!('children' in value) || value['children'] === undefined) return false;
    return true;
}

export function NavigationSectionFromJSON(json: any): NavigationSection {
    return NavigationSectionFromJSONTyped(json, false);
}

export function NavigationSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NavigationSection {
    if (json == null) {
        return json;
    }
    return {
        
        'componentType': json['component_type'] == null ? undefined : json['component_type'],
        'title': json['title'] == null ? undefined : json['title'],
        'children': ((json['children'] as Array<any>).map(ComponentFromJSON)),
    };
}

export function NavigationSectionToJSON(value?: NavigationSection | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component_type': value['componentType'],
        'title': value['title'],
        'children': ((value['children'] as Array<any>).map(ComponentToJSON)),
    };
}

