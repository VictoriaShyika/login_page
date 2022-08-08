import { ArrowBackComponent } from './arrow.component';
import Router from 'next/router'


export function ArrowBackContainer() {
   const onClickHandler = () => {Router.back()}
  return <ArrowBackComponent onClick={onClickHandler} />;
}
