import { RootStackParamList } from "../../routes/app.stack.routes";
import { AppTabParamList } from "../../routes/app.tab.routes";
import { AuthStackParamList } from "../../routes/auth.routes"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AuthStackParamList, AppTabParamList { }
  }
}