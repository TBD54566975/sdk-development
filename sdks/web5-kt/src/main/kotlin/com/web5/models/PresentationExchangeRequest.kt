/**
* web5 SDK test server
* No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
*
* The version of the OpenAPI document: 0.2.0
* 
*
* NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
* https://openapi-generator.tech
* Do not edit the class manually.
*/
package com.web5.models

/**
 * 
 * @param presentationDefinition 
 * @param vcJwts 
 */
data class PresentationExchangeRequest(
    val presentationDefinition: PresentationDefinition? = null,
    val vcJwts: kotlin.collections.List<kotlin.String>? = null
) 

