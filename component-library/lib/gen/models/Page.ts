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
import type { Component } from './Component';
import {
    ComponentFromJSON,
    ComponentFromJSONTyped,
    ComponentToJSON,
} from './Component';

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    componentType?: PageComponentTypeEnum;
    /**
     * 
     * @type {Component}
     * @memberof Page
     */
    sidebar: Component;
    /**
     * 
     * @type {Array<Component>}
     * @memberof Page
     */
    children: Array<Component>;
}


/**
 * @export
 */
export const PageComponentTypeEnum = {
    Page: 'Page'
} as const;
export type PageComponentTypeEnum = typeof PageComponentTypeEnum[keyof typeof PageComponentTypeEnum];


/**
 * Check if a given object implements the Page interface.
 */
export function instanceOfPage(value: object): value is Page {
    if (!('sidebar' in value) || value['sidebar'] === undefined) return false;
    if (!('children' in value) || value['children'] === undefined) return false;
    return true;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if (json == null) {
        return json;
    }
    return {
        
        'componentType': json['component_type'] == null ? undefined : json['component_type'],
        'sidebar': ComponentFromJSON(json['sidebar']),
        'children': ((json['children'] as Array<any>).map(ComponentFromJSON)),
    };
}

export function PageToJSON(value?: Page | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component_type': value['componentType'],
        'sidebar': ComponentToJSON(value['sidebar']),
        'children': ((value['children'] as Array<any>).map(ComponentToJSON)),
    };
}

