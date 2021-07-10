import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootType } from '../state';

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;
