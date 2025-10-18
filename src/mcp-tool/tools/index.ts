import { BuiltinToolName, BuiltinTools } from './en/builtin-tools';
import { ToolName as GenToolName, GenTools as GenToolsEn, ProjectName as GenProjectName } from './en/gen-tools';

export type ToolName = GenToolName | BuiltinToolName;
export type ProjectName = GenProjectName;

export const AllTools = [...GenToolsEn, ...BuiltinTools];
