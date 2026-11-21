import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder().setTitle('Addis Eats API')
    .setDescription('Food delivery for Addis Ababa. Money is in whole santim; phone numbers use TeleBirr format.')
    .setVersion('1.0').addTag('restaurants','Kitchens that take orders')
    .addTag('dishes','Items on a restaurant menu').addTag('orders','Customer orders and status')
    .addApiKey({type:'apiKey',name:'x-api-key',in:'header'},'api-key').build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('docs',app,document,{swaggerOptions:{persistAuthorization:true}});
}
