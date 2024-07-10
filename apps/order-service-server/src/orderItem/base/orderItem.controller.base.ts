/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrderItemService } from "../orderItem.service";
import { OrderItemCreateInput } from "./OrderItemCreateInput";
import { OrderItem } from "./OrderItem";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemWhereUniqueInput } from "./OrderItemWhereUniqueInput";
import { OrderItemUpdateInput } from "./OrderItemUpdateInput";

export class OrderItemControllerBase {
  constructor(protected readonly service: OrderItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderItem })
  async createOrderItem(
    @common.Body() data: OrderItemCreateInput
  ): Promise<OrderItem> {
    return await this.service.createOrderItem({
      data: {
        ...data,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,
        price: true,
        productId: true,

        order: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderItem] })
  @ApiNestedQuery(OrderItemFindManyArgs)
  async orderItems(@common.Req() request: Request): Promise<OrderItem[]> {
    const args = plainToClass(OrderItemFindManyArgs, request.query);
    return this.service.orderItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,
        price: true,
        productId: true,

        order: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async orderItem(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    const result = await this.service.orderItem({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,
        price: true,
        productId: true,

        order: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOrderItem(
    @common.Param() params: OrderItemWhereUniqueInput,
    @common.Body() data: OrderItemUpdateInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.updateOrderItem({
        where: params,
        data: {
          ...data,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          quantity: true,
          price: true,
          productId: true,

          order: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OrderItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOrderItem(
    @common.Param() params: OrderItemWhereUniqueInput
  ): Promise<OrderItem | null> {
    try {
      return await this.service.deleteOrderItem({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          quantity: true,
          price: true,
          productId: true,

          order: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
