export function getAge() {
	return new Date(new Date().getTime() - new Date('10-15-2007').getTime()).getFullYear() - 1970;
}

export const slugFromPath = (path: string) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;