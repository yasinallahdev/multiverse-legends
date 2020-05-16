
#pragma once

#define DECLARE_ATTRIBUTE_FUNCTION(PropertyName) static FGameplayAttribute PropertyName##Attribute();

#define DEFINE_ATTRIBUTE_FUNCTION(ClassName, PropertyName) \
FGameplayAttribute ClassName::PropertyName##Attribute() { \
    static FProperty* Property = FindFieldChecked<FProperty>(ClassName::StaticClass(), GET_MEMBER_NAME_CHECKED(ClassName, PropertyName)); \
    return FGameplayAttribute(Property); \
}
