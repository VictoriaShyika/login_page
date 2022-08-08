import { LoginContainer } from './login.container';
import {
  PageLayout,
  ContentLayout,
  LoginLayout,
  BackgroundLayout,
} from '../../lib/elements/layout';
import { ArrowBackComponent } from './frame/arrow/arrow.component';

export function LoginPage() {
  return (
    <BackgroundLayout>
    <ContentLayout>
      <PageLayout>
        <LoginLayout>
          <ArrowBackComponent />
          <LoginContainer />
        </LoginLayout>
      </PageLayout>
    </ContentLayout>
    </BackgroundLayout>
  );
}
