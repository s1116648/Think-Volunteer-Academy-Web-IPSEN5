import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {HttpRequest} from "@angular/common/http";
import { RoleService } from "../app/role/role.service";
import { Role } from "../app/role/role.model";
import { CreateRoleDTO } from "../app/role/dto/create-role-dto";
import { UpdateRoleDTO } from "../app/role/dto/update-role-dto";

describe("Role service", () => {

	let httpTestingController: HttpTestingController;
	let service: RoleService;

	const mockRoles: Role[] = [
		{
			id: "1",
			name: "admin",
			description: "Desc",
			createdAt: new Date(),
			updatedAt: new Date(),
			permissions: [
				{
					name: "course.create",
					description: "Allows to create a course",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "course.edit",
					description: "Allows to edit a course",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "course.delete",
					description: "Allows to delete a course",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]
		},
		{
			id: "2",
			name: "content creator",
			description: "can create content",
			createdAt: new Date(),
			updatedAt: new Date(),
			permissions: [
				{
					name: "course.create",
					description: "Allows to create a course",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "course.edit",
					description: "Allows to edit a course",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "course.delete",
					description: "Allows to delete a course",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]
		}
	];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [RoleService]
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		service = TestBed.inject(RoleService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should create a role", fakeAsync(() => {
		const toPostMockRoleDTO: CreateRoleDTO =
			{
				name: "admin",
				description: "Desc",
				permissions: [
					"course.create",
					"course.edit",
					"course.delete"
				]
			};

		service.create(toPostMockRoleDTO)
			.subscribe((role: Role) => {
				expect(role.name).toEqual(toPostMockRoleDTO.name);
				expect(role.description).toEqual(toPostMockRoleDTO.description);
				expect(role.permissions.map(permission => permission.name)).toEqual(toPostMockRoleDTO.permissions);
			});

		const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
			expect(request.url).toEqual(`/roles`, toPostMockRoleDTO);
			expect(request.method).toBe("POST");
			return true;
		});

		req.flush(mockRoles[0]);
		tick();
	}));

	it("should update a role", fakeAsync(() => {
		const toUpdateMockRoleDTO: UpdateRoleDTO =
			{
				name: "nietadmin",
				description: "nietDesc",
				permissions: [
					"course.create",
					"course.edit",
					"course.delete"
				]
			};

		const rol: Role = {
			id: "1",
			name: "nietadmin",
			description: "nietDesc",
			createdAt: new Date(),
			updatedAt: new Date(),
			permissions: [
				{
					name: "course.create",
					description: "Allows to create a course",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "course.edit",
					description: "Allows to edit a course",
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: "course.delete",
					description: "Allows to delete a course",
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]
		};

		service.update("1", toUpdateMockRoleDTO)
			.subscribe((role: Role) => {
				expect(role.name).toEqual(toUpdateMockRoleDTO.name);
				expect(role.description).toEqual(toUpdateMockRoleDTO.description);
				expect(role.permissions.map(permission => permission.name)).toEqual(toUpdateMockRoleDTO.permissions);
			});

		const req = httpTestingController.expectOne((request: HttpRequest<any>): boolean => {
			expect(request.url).toEqual(`/roles/1`, toUpdateMockRoleDTO);
			expect(request.method).toBe("PATCH");
			return true;
		});

		req.flush(rol);
		tick();
	}));
});
