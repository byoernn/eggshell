import * as apps from "../apps";
import {EggShell} from "egg-shell";

EggShell.init("app");
EggShell.load(apps.DemoEgg);
EggShell.start();