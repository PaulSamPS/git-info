import { LocalSearchUsersItem } from 'shared/types';
import React from 'react';

export interface SearchResultListProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  users: LocalSearchUsersItem[];
}
