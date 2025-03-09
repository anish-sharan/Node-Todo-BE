export const stringToBoolean = (input: string| null | undefined): boolean | undefined => {
	if (!input) return;

	return input === 'true';
};

export const stringToInt = (input: string): number | undefined => {
	if (!input) return;

	const num = parseInt(input);

	if (isNaN(num)) return;

	return num;
};

export const numberToString = (input: number | null | undefined): string => {
	if (!input) return '';

	return input.toString();
};

export const stringToEnum = <T>(value: string | undefined | null, enumType: T): T[keyof T] | undefined => {
	if (!value || !enumType) return;

	const enumValues: string[] = Object.values(enumType);

	if (enumValues.includes(value)) {
		return value as T[keyof T];
	}
};
