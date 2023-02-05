import React from 'react';

export interface HasComponent {
  Component?: React.ElementType;
}

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}
